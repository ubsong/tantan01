
const Card = ({ data }: { data: { name: string; age: number; country: string } }) => {
  return (
    <div>
      <div className="w-100 border-2 rounded-2xl p-4 mt-2 font-bold bg-amber-200">
        <h1 className="font-medium size-lg">내 이름은 <span className="font-bold">{data.name}</span> 입니다.</h1>
        <p className="font-light size-md">
          나이는 <span className="font-bold">{data.age}</span> 세입니다.
        </p>
        <p className="font-light">국적은 {data.country}입니다.</p>
      </div>
    </div>
  )
}

export default Card