//import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="app">
      <div className="container">
        
        {/* Header */}
        <div className={`header ${isVisible ? 'visible' : ''}`}>
          <div className="header-left">
            <h1>Aymen Abderraouf Harrari</h1>
            <h2>SWE Student | Content Creator | Video Editor</h2>
          </div>
          <div className="header-right">
            <p>📍 Istanbul, Turkey</p>
            <p>📧 aymenharrari@gmail.com</p>
            <p>📞 +90 554 129 25 05</p>
            <p>🔗 <a href="https://www.linkedin.com/in/aymen-harrari-b77628231/" target="_blank">LinkedIn</a> | 🎥 <a href="https://www.youtube.com/@%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D8%A7%D8%AA.%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9" target="_blank">YouTube</a></p>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          
          {/* Professional Summary */}
          <div className={`card ${isVisible ? 'visible delay-1' : ''}`}>
            <h3>Professional Summary</h3>
            <p>Creative content creator and Software Engineering student with <strong>7+ years</strong> in esports-style media. Proven track record of growing channels to <strong>250K+ subscribers</strong> and generating <strong>10M+ views</strong> on viral content. Expert in audience psychology, retention hooks, and YouTube algorithms for the MENA region.</p>
          </div>

          {/* Key Achievements */}
          <div className={`card ${isVisible ? 'visible delay-2' : ''}`}>
            <h3>🏆 Key Achievements</h3>
            <div className="achievements-grid">
              <div>📺 250,000+ subscribers | Silver Play Button (2023)</div>
              <div>⚡ 10M+ Shorts views | 4M+ long-form views</div>
              <div>🎬 500+ professional videos produced</div>
              <div>📈 12%+ average CTR on top thumbnails</div>
            </div>
          </div>

          {/* Analytics Stats */}
          <div className={`${isVisible ? 'visible delay-3' : ''}`}>
            <h3>📊 YouTube Analytics Snapshot</h3>
            <div className="stats-grid">
              <div className="stat-card"><div className="stat-number">120M+</div><div>Total Views</div></div>
              <div className="stat-card"><div className="stat-number">1.4M+</div><div>Watch Time (Hours)</div></div>
              <div className="stat-card"><div className="stat-number">8.2%</div><div>Avg. CTR</div></div>
              <div className="stat-card"><div className="stat-number">164+</div><div>Countries Reached</div></div>
            </div>

            <div className="two-columns">
              <div className="info-box">
                <h4>🌍 Top Performing Regions</h4>
                <div><span>Algeria (DZ)</span><span className="value">69.5M views</span></div>
                <div><span>Iraq (IQ)</span><span className="value">13.6M views</span></div>
                <div><span>Saudi Arabia (SA)</span><span className="value">9.2M views</span></div>
                <div><span>Egypt (EG)</span><span className="value">7.1M views</span></div>
                <div><span>France (FR)</span><span className="value">834K views 🔥</span></div>
              </div>
              <div className="info-box">
                <h4>👥 Audience Age Breakdown</h4>
                <div><span>25-34 years</span><span className="value">37.4% (core)</span></div>
                <div><span>35-44 years</span><span className="value">27.6%</span></div>
                <div><span>18-24 years</span><span className="value">20.2%</span></div>
                <div><span>Best retention</span><span className="value">13-17 years (47.3%)</span></div>
              </div>
            </div>

            <div className="info-box">
              <h4>📈 Growth Milestones</h4>
              <div className="two-columns">
                <div><span>📅 April 2024</span><span className="value">3.3M+ views (peak)</span></div>
                <div><span>🚀 July 2024</span><span className="value">1.1M+ views</span></div>
                <div><span>📊 Dec 2020 - Jan 2021</span><span className="value">50K+ daily</span></div>
                <div><span>⚡ 2019-2020</span><span className="value">2K → 20K daily</span></div>
              </div>
            </div>
          </div>

          {/* Top Shorts */}
          <div className={`${isVisible ? 'visible delay-4' : ''}`}>
            <h3>🔥 Top Performing Shorts</h3>
            <div className="video-grid">
              <div className="video-card">
                <p className="arabic-title">هذا هو جديد رخيص يهبل خياااال 🤣🤣 اعلان اهرامات بلبن 😂</p>
                <a href="https://www.youtube.com/shorts/63G7eq82aFY" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 10.24M views</span><span>📈 76.5% retention</span><span>👥 +22.2K subs</span></div>
              </div>
              <div className="video-card">
                <p className="arabic-title">الاعلانات في الاردن 😂😂😂 هسه راح ابيعكم 😂😂</p>
                <a href="https://youtube.com/shorts/d47VDMruh7Q" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 10.19M views</span><span>📈 82.4% retention</span><span>👥 +40.1K subs</span></div>
              </div>
              <div className="video-card">
                <p className="arabic-title">حادث ابو فله 💔 !؟ اعلان عصير تايم 😂😂😂</p>
                <a href="https://youtube.com/shorts/Txwaq3UhLsM" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 9.91M views</span><span>📈 76.9% retention</span><span>👥 +36.4K subs</span></div>
              </div>
            </div>
          </div>

          {/* Top Long Videos */}
          <div className={`${isVisible ? 'visible delay-5' : ''}`}>
            <h3>🎥 Top Performing Long-Form</h3>
            <div className="video-grid two-columns">
              <div className="video-card">
                <p className="arabic-title">إشهار أوبتيلا للطفل الصغير - Publicité Optilla Enfant</p>
                <a href="https://www.youtube.com/watch?v=JPc2GYravQM" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 4.41M views</span><span>📈 69.4% retention</span><span>💰 $715 earned</span></div>
              </div>
              <div className="video-card">
                <p className="arabic-title">إشهار شكولاطة أوبتيلا - Publicité Chocolat Optilla</p>
                <a href="https://www.youtube.com/watch?v=MXDQFgzh-YM" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 3.91M views</span><span>📈 57.3% retention</span><span>💰 $372 earned</span></div>
              </div>
              <div className="video-card">
                <p className="arabic-title">إشهار شكولاطة ليا - Publicité Chocolat Liya</p>
                <a href="https://www.youtube.com/watch?v=DiQxTk5WOqg" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 2.91M views</span><span>📈 51.2% retention</span><span>💰 $302 earned</span></div>
              </div>
              <div className="video-card">
                <p className="arabic-title">أكثر 10 إشهارات مشاهدة (2021) Top 10 des publicités</p>
                <a href="https://youtu.be/RVcqr8jknwM" target="_blank">🔗 Watch Video →</a>
                <div className="tags"><span>📊 1.11M views</span><span>📈 24.3% retention</span><span>💰 $236 earned</span></div>
              </div>
            </div>
          </div>

          {/* Experience & Skills */}
          <div className={`two-columns ${isVisible ? 'visible delay-6' : ''}`}>
            <div className="info-box">
              <h3>💼 Content Experience</h3>
              <div className="job">
                <h4>Freelance Content Creator & YouTube Manager</h4>
                <p className="date">2018 – Present</p>
                <ul>
                  <li>Built "Arabian Ads" to 250K+ subscribers</li>
                  <li>Viral hooks & retention optimization</li>
                  <li>Thumbnail design for max CTR</li>
                </ul>
              </div>
              <div className="job">
                <h4>Marketing & Media Coordinator</h4>
                <p className="date">Baghdad Invest – Istanbul | 2023 – 2024</p>
                <ul>
                  <li>Arabic promotional videos</li>
                  <li>Digital campaigns & social media</li>
                  <li>Content optimization for engagement</li>
                </ul>
              </div>
            </div>
            <div className="info-box">
              <h3>🛠️ Skills & Tools</h3>
              <h4>🎨 Creative Media</h4>
              <div className="tags">
                <span>Premiere Pro</span><span>After Effects</span><span>Capcut</span><span>Photoshop</span>
              </div>
              <h4>💻 Technical</h4>
              <div className="tags">
                <span>C</span><span>Java</span><span>SQL</span><span>C++</span>
              </div>
            </div>
          </div>

          {/* Additional Projects */}
          <div className={`card ${isVisible ? 'visible delay-7' : ''}`}>
            <h3>📁 Additional Projects</h3>
            <div>▶ Designed Fortnite maps using UEFN (game mechanics & player experience)</div>
            <div>▶ Created "Top 10 Ads" series analyzing marketing trends in the Arab world</div>
          </div>

          {/* Education & Languages */}
          <div className={`two-columns ${isVisible ? 'visible delay-8' : ''}`}>
            <div className="info-box">
              <h3>🎓 Education</h3>
              <p><strong>B.Sc. Software Engineering</strong></p>
              <p>Altınbaş University – Istanbul (2024 – Present)</p>
            </div>
            <div className="info-box">
              <h3>🌐 Languages</h3>
              <div><span>Arabic</span><span className="value">Native</span></div>
              <div><span>French</span><span className="value">Conversational</span></div>
              <div><span>English</span><span className="value">Upper-Intermediate</span></div>
              <div><span>Turkish</span><span className="value">Beginner</span></div>
            </div>
          </div>

          {/* Footer */}
          <div className={`footer ${isVisible ? 'visible delay-9' : ''}`}>
            💡 Committed to ethical work, long-term growth, discipline, and impact. Passionate about esports and digital entertainment.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
