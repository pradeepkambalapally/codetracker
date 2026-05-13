import AccountInfoCard from "../components/settings/AccountInfoCard";
import ConnectedPlatformsCard from "../components/settings/ConnectedPlatformsCard";
import PreferencesCard from "../components/settings/PreferencesCard";
import SecurityCard from "../components/settings/SecurityCard";

import useUser from "../hooks/useUser";
const Settings = () => {
    const { user } = useUser();
    return (

        <div className="flex-1 bg-slate-100 min-h-screen p-6 overflow-x-hidden">

            {/* Header */}

            <div className="mb-6">

                <h1 className="text-3xl font-bold text-slate-800">

                    Settings

                </h1>

                <p className="text-slate-500 mt-2">

                    Manage your account and application preferences

                </p>

            </div>

            {/* Settings Grid */}

            <div className="grid-cols-1 xl:grid-cols-[0.8fr_1.2fr]
items-start">

                

              <AccountInfoCard
    user={user}
/>

                

                <ConnectedPlatformsCard user = {user}/>

                

                <PreferencesCard />

                

                <SecurityCard />

            </div>

        </div>
    );
};

export default Settings;