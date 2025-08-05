import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetialPage';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
           <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
           <Route path="/blog/:id" element={<BlogDetail />} />



          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
