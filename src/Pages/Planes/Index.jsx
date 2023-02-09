
import {
	TopSection,
	GeneralPlan,
	CardPlan
} from './Components';

import PlanesInfo from './PacksContent.json';



export default function Planes (){


	console.log(PlanesInfo)



	return (
		<>
			<TopSection />
			<GeneralPlan />
			{PlanesInfo ? PlanesInfo.map(({
				Title, Description, Extras, Name, Offers, Information
			}, Index)=><CardPlan key={Name} 
				Title={Title}
				PackName={Name}
				PackDescription={Description}
				Information={Information}
				PackContent={Offers}
				Index={Index}
				Extras={Extras}
				/>) : null}
		</>

	)
}