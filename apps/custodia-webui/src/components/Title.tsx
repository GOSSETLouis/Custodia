interface TitleProperties {
  content: string;
  img?: string;
}

export function Title({ content, img }: TitleProperties) {
  return (
    <div className="title">
      {img !== undefined && <img className="icon" src={img} alt={content} width={30} height={30} />}
      <h1 className="text">{content}</h1>
    </div>
  );
}
