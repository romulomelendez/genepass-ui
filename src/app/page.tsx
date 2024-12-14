import ActionButtons from "@/components/ActionButtons";
import CreatePwdBtn from "@/components/CreatePwdBtn";
import Header from "@/components/Header";
import PasswordDisplay from "@/components/PasswordDisplay";

import { PasswordProvider } from "@/providers/PasswordProvider";

const Home: React.FC = async () => (
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
);

export default Home;
