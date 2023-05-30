import createClasses from '../utils/create-classes';
import defaultImage from '../assets/blank.png'


export default function Avatar({ src, className = 'h-10 w-10' }) {
  const classes = createClasses('rounded-full', className);

  return <img src={src || defaultImage } alt="user" className={classes} />;
}