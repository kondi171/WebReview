import Footer from '../components/main_page/Footer';
import Header from '../components/main_page/Header';
import { Link } from 'react-router-dom';
const Help = () => {
  return (
    <>
      <Header />
      <section className="help">
        <h1>Centrum Pomocy</h1>
        <ol>
          <li>
            <h2>Aliquid temporibus vero doloribus saepe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus vero doloribus saepe, omnis beatae praesentium necessitatibus sequi quae repudiandae est eius repellat ea corporis nostrum eligendi possimus debitis facilis fuga repellendus. Aperiam molestiae inventore, alias culpa vero quisquam enim.</p>
          </li>
          <li>
            <h2>Omnis beatae praesentium necessitatibus sequi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus vero doloribus saepe, omnis beatae praesentium necessitatibus sequi quae repudiandae est eius repellat ea corporis nostrum eligendi possimus debitis facilis fuga repellendus. Aperiam molestiae inventore, alias culpa vero quisquam enim.</p>
          </li>
          <li>
            <h2>Quae repudiandae est eius repellat ea</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus vero doloribus saepe, omnis beatae praesentium necessitatibus sequi quae repudiandae est eius repellat ea corporis nostrum eligendi possimus debitis facilis fuga repellendus. Aperiam molestiae inventore, alias culpa vero quisquam enim.</p>
          </li>
          <li>
            <h2>Alias culpa vero quisquam enim</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus vero doloribus saepe, omnis beatae praesentium necessitatibus sequi quae repudiandae est eius repellat ea corporis nostrum eligendi possimus debitis facilis fuga repellendus. Aperiam molestiae inventore, alias culpa vero quisquam enim.</p>
          </li>
          <li>
            <h2>Corporis nostrum eligendi possimus debitis</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus vero doloribus saepe, omnis beatae praesentium necessitatibus sequi quae repudiandae est eius repellat ea corporis nostrum eligendi possimus debitis facilis fuga repellendus. Aperiam molestiae inventore, alias culpa vero quisquam enim.</p>
          </li>
          <li>
            <h2>Fuga repellendus aperiam molestiae inventore</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus vero doloribus saepe, omnis beatae praesentium necessitatibus sequi quae repudiandae est eius repellat ea corporis nostrum eligendi possimus debitis facilis fuga repellendus. Aperiam molestiae inventore, alias culpa vero quisquam enim.</p>
          </li>
        </ol>
      </section>
      <div className="links">
        <Link title="Powrót do strony głównej" to="/"><i className='fa fa-home'></i></Link>
      </div>
      <Footer />
    </>
  );
}

export default Help;