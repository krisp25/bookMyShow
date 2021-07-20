import React from "react";

// Components
import EntertainmentCardSLider from "../components/EntertainmentCard/Entertainmentcard.components";
import PosterSlider from "../components/PosterSlider/PosterSlider.components"

// Configs
import TempImages from "../config/TempPosters.config";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-10 py-1 ">
                    <h1 className="text-xl font-bold text-gray-800 py-4">The best of enterntainment</h1>
                    <EntertainmentCardSLider />
                </div>

                <div className="bg-bms-800 py-12">
                    <div className="container mx-auto px-4 flex flex-col gap-2">
                        <div className="hidden items-center justify-between md:flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />
                        </div>
                        <PosterSlider 
                            images={TempImages}
                            title="Premieres"
                            subtitle="Brand new releases every friday"
                            isDark={true}
                        /> 
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
            <PosterSlider 
                images={TempImages}
                title="Online Streaming"
                isDark={false}
            />
            </div>

            <div className="container mx-auto px-4 py-8">
            <PosterSlider 
                images={TempImages}
                title="Outdoor Events"
                isDark={false}
            />
            </div>
        </>
    );
};

export default HomePage;