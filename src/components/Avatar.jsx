import createClasses from '../utils/create-classes';

export default function Avatar({ src, className = 'h-10 w-10' }) {
  const classes = createClasses('rounded-full', className);

  return <img src={src} alt="user" className={classes} />;
}