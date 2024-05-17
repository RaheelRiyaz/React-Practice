import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import Loader from "./Loader";
import { setError, setResult } from "../store/AppStore";

export function MainContainer() {
  const dispatch = useDispatch();

  const { isLoading, error, result } = useSelector((store) => store.weather);

  const audioRef = useRef(new Audio());

  function handleBack() {
    dispatch(setError(""));
    dispatch(setResult(null));
  }

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    if (result && result?.phonetics && result?.phonetics.length > 0) {
      currentAudioRef.src =
        result?.phonetics[0]?.audio ||
        result?.phonetics[1]?.audio ||
        result?.phonetics[2]?.audio;
    }

    return () => {
      currentAudioRef.src = "";
    };
  }, [result]);

  if (error) {
    return (
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">Ooops!</p>
        <p>No such word found.</p>
        <button
          onClick={handleBack}
          className="bg-red-400 rounded-lg mt-3 flex justify-center items-center p-2"
        >
          Return to search page
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#2d5f7c] w-full h-auto min-h-screen absolute top-0 p-3">
      <SearchBox />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="dictionary mt-5">
          <div className="word text-white">
            <h1 className="text-xl md:text-3xl text-center">{result?.word}</h1>
          </div>
          {result ? (
            <>
              <div className="text-green-100 mt-2 flex gap-2 justify-start items-center">
                <p>
                  {(result &&
                    result?.phonetics &&
                    result?.phonetics?.length > 0 &&
                    result?.phonetics[0]?.text) ||
                    result?.phonetics[1]?.text ||
                    result?.phonetics[2]?.text}
                </p>
                <HiOutlineSpeakerWave
                  onClick={() => audioRef.current.play()}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </>
          ) : (
            <div
              className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
              role="alert"
            >
              <p className="font-bold">Dictionary</p>
              <p className="text-sm">Search a word you want to know about.</p>
            </div>
          )}
          {result?.meanings &&
            result.meanings.map((meaning, i) => {
              return (
                <div key={i}>
                  <div className="definitions mt-5">
                    <h1 className="text-green-500 text-xl">
                      {meaning.partOfSpeech}
                    </h1>
                    <h1 className="text-gray-300 text-2xl">Definitions :-</h1>
                    {meaning.definitions.map((definition, i) => {
                      return (
                        <div
                          className="flex text-gray-300 mt-4 md:text-xl flex-col"
                          key={i}
                        >
                          <div>
                            <div key={i}>
                              <span>{i + 1} :</span> {definition.definition}
                            </div>
                          </div>
                          <div className="text-blue-300">
                            {definition?.example &&
                              "eg :-" + definition.example}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {meaning?.synonyms?.length > 0 && (
                    <div className="synonyms mt-3">
                      <h1 className="text-gray-200 font-bold text-2xl mb-2">
                        Synonyms :-
                      </h1>
                      {meaning?.synonyms.map((_, i) => (
                        <h1 className="text-blue-500 underline" key={i}>
                          {_}
                        </h1>
                      ))}
                    </div>
                  )}
                  {meaning?.anonyms?.length > 0 && (
                    <div className="anonyms mt-3">
                      <h1 className="text-gray-200 font-bold text-2xl mb-2">
                        Anonyms :-
                      </h1>
                      {meaning?.anonyms &&
                        meaning?.anonyms.map((_, i) => (
                          <h1 className="text-blue-500 underline" key={i}>
                            {_}
                          </h1>
                        ))}
                    </div>
                  )}
                  {result?.meanings.length > 1 && <hr className="my-5" />}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
