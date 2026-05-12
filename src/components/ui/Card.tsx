interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <article className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

export default Card;
