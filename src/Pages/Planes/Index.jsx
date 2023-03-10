
import {
	TopSection,
	GeneralPlan,
	CardPlan,
	PlanPersonalizado
} from './Components';

import PlanesInfo from './MockUps/PacksContent.json';



export default function Planes (){



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
			<PlanPersonalizado />
		</>

	)
}