/* eslint-disable react/prop-types */

function Heading({title}) {
  return (
    <div className="flex justify-center items-center flex-col m-3">
      <h1 className="text-3xl">{title}</h1>
      <span className="underline block h-1 w-20 bg-teal-600 rounded-full mt-1"></span>
    </div>
  )
}

export default Heading
