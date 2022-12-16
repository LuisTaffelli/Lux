import { BiUser } from 'react-icons/bi';
import { TeacherImage } from './Styled/CourseImage';
import { AvatarContainer } from './Styled/Flex-cards';

// Componente para el avatar del Profesor en cursos Recomendados


function RAvatar({ name, img, isInstructor }) {
  return (
    <AvatarContainer>
      <TeacherImage src={img} alt=""/>
      <div className="right">
        <h3>{name}</h3>
        {isInstructor ? (
          <p className="instructor-badge">
            <span className="icon" color='#FFFFFF'>
              <BiUser size={8}/>
            </span>
            Instructor
          </p>
        ) : undefined}
      </div>
    </AvatarContainer>
  );
}

export default RAvatar;
