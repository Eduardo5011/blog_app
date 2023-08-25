const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          SOmething very pretty that i can see all the time, not really...Oh
          well lol
        </h2>
        <p className="info">
          <a href="" className="author">
            Eddie Ros
          </a>
          <time aria-hidden="true">2023-01-6 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          velit id ullamcorper sagittis. Integer accumsan luctus lacinia. Donec
          sagittis nec lorem eu pharetra. Morbi ac augue
        </p>
      </div>
    </div>
  );
};
export default Post;
