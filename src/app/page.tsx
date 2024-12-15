import {
  Header,
  PasswordDisplay,
  ActionButtons,
  CreatePwdBtn
} from "@/components"

import { PasswordProvider } from "@/providers/PasswordProvider"

const Home: React.FC = () => (
  <div className="flex flex-col h-screen gap-2 items-center justify-evenly bg-slate-950">
    <PasswordProvider>
      <Header />
      <div className="flex flex-col gap-5 sm:-mt-10">
        <PasswordDisplay />
        <ActionButtons />
        <CreatePwdBtn />
      </div>
    </PasswordProvider>
  </div>
)

export default Home
