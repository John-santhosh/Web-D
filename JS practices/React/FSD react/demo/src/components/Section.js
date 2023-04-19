export function Section() {
  return (
    <div className="section">
      <section className="about">
        <h2>About section</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          culpa, eaque magnam excepturi eos distinctio iste incidunt, mollitia
          in asperiores, laboriosam voluptatibus dolorum quasi consequuntur
          perspiciatis veniam tempora? Itaque, in.
        </p>
      </section>
      <section className="projects">
        <ul>
          <li>
            <li>john</li>
            <li>john</li>
            <li>john</li>
            <li>john</li>
          </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          debitis quas nam, deleniti labore veritatis in qui ab assumenda
          dolore?
        </p>
      </section>
      <section className="contact">
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
}
