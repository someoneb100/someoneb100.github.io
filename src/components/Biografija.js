import { vratiSadrzaj } from "../utils/VratiSadrzaj";
import { Title } from "./Title";
import data from "../data/websiteData.json";
import Preuzmi from "../shared/Preuzmi.png";
import Porfilna from "../shared/profilnaSlika.png";

export const Biografija = () => {
	return (
		<div className="pl-[15%] pr-[15%] bg-[#F7F8F9] pb-12 w-full">
			<Title content={"Биографија"} />
			<div className=" mx-auto bg-white shadow-lg rounded-lg p-4">
				<div className="flex gap-4">
					<div className="max-h-[420px] max-w-[420px] rounded-lg overflow-hidden flex-shrink-0">
						<img
							src={Porfilna}
							alt="Profile photo"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="flex flex-col">
						<div className="flex-1">
							<p className="text-gray-700 text-base">
								{vratiSadrzaj({ content: data.biografija })}
							</p>
						</div>
						<div className="mt-4 text-right flex justify-end">
							<a
								href="/Biografija.pdf"
								target="_blank"
								download
								rel="noopener noreferrer">
								<button className="bg-white flex gap-x-2  border border-[#22A8C5] text-[#22A8C5] font-semibold text-sm px-4 py-2 rounded-lg shadow-md hover:bg-blue-50">
									Преузми радну биографију <img src={Preuzmi} />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
