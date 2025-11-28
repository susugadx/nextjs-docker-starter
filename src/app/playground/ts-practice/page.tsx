// src/app/playground/ts-practice/page.tsx

type TestProps = {
  message: string
}

function Test({ message }: TestProps) {
  return <div>{message}</div>
}

export default function Page() {
  return (
    <div className="container py-24">
      <h1 className="text-2xl font-bold">TypeScript 練習ページ</h1>
      <Test message="TypeScript の設定、完璧です！" />
    </div>
  )
}