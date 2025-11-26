import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          WHAT I DO
          <span className="title-bracket">]</span>
        </h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-header">
              <span className="card-icon">▣</span>
              <h3 className="card-title">BUILD</h3>
            </div>
            <div className="card-body">
              <p>Creating robust, scalable web applications with modern frameworks and best practices. From concept to deployment.</p>
              <ul className="card-list">
                <li>&gt; FastApi & React</li>
                <li>&gt; Full-Stack Development</li>
                <li>&gt; Database Design</li>
              </ul>
            </div>
          </div>
          <div className="service-card">
            <div className="card-header">
              <span className="card-icon">⚡</span>
              <h3 className="card-title">AUTOMATE</h3>
            </div>
            <div className="card-body">
              <p>Streamlining workflows and processes through intelligent automation solutions that save time and reduce errors.</p>
              <ul className="card-list">
                <li>&gt; Workflow Automation</li>
                <li>&gt; API Integration</li>
                <li>&gt; Process Optimization</li>
              </ul>
            </div>
          </div>
          <div className="service-card">
            <div className="card-header">
              <span className="card-icon">🚀</span>
              <h3 className="card-title">DEPLOY</h3>
            </div>
            <div className="card-body">
              <p>Ensuring seamless deployment and maintenance with modern DevOps practices and cloud infrastructure.</p>
              <ul className="card-list">
                <li>&gt; Cloud Deployment</li>
                <li>&gt; CI/CD Pipelines</li>
                <li>&gt; Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;