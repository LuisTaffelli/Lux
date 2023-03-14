import {
	TopSection,
	GeneralPlan,
	CardPlan,
	PlanPersonalizado
} from './Components';

import FixedWhatsapp from '../../GeneralComponents/FixedContent/WhatsAppContainer';

import PlanesInfo from './MockUps/PacksContent.json';

import {Main} from './Styles/TopSection.styled'



export default function Planes ({
	ScrollTo
}){



	return (
		<Main>
			<TopSection />
			<GeneralPlan ScrollTo={ScrollTo}/>
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
				ScrollTo={ScrollTo}
				/>) : null}
			<PlanPersonalizado />
		</Main>

	);
};