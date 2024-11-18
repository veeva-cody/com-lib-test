const PeopleTeamLight = {
  template: /*html*/ `
    <section class="team-cards team-cards--light">
      <div class="container">
          <div class="copy-container">
              <h2>Management</h2>
          </div>

          <div class="team-cards__grid">
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Peter-Gassner-LI-500x500.jpg" loading="lazy" width="150" height="150" alt="Headshot of Peter Gassner" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Peter Gassner</h3>
                          <p class="team-card__title">Founder and CEO</p>
                          <p class="team-card__tenure">17 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Peter Gassner is responsible for Veeva overall, including strategic direction, product direction, and operations.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Tom-Scwhenge-LI-500x500.jpg" loading="lazy" width="150" height="150" alt="Headshot of Tom Schwenger" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Tom Schwenger</h3>
                          <p class="team-card__title">President and Chief Customer Officer</p>
                          <p class="team-card__tenure">5 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Tom Schwenger is responsible for sales, services, and other customer-facing groups.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Asaf-Evenhaim-LI-500x500.jpg" loading="lazy" width="150" height="150" alt="Headshot of Asaf Evenhaim" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Asaf Evenhaim</h3>
                          <p class="team-card__title">CEO, Veeva Crossix</p>
                          <p class="team-card__tenure">4 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Asaf Evenhaim leads Veeva Crossix, including product, sales, strategy, services, and marketing.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Brian-Van-Wagener-LI-500x500.jpg" alt="Headshot of Brian Van Wagener" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Brian Van Wagener</h3>
                          <p class="team-card__title">Chief Financial Officer</p>
                          <p class="team-card__tenure">6 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Brian Van Wagener is responsible for finance, accounting, legal, investor relations, and treasury.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Nitsa-Zuppas-LI-500x500.jpg" alt="Headshot of Nitsa Zuppas" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Nitsa Zuppas</h3>
                          <p class="team-card__title">President and Chief of Staff</p>
                          <p class="team-card__tenure">11 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Nitsa Zuppas is responsible for helping set, communicate, and execute company direction.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Howie-Hsueh-LI-500x500.jpg" alt="Headshot of Howie Hsueh" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Howie Hsueh</h3>
                          <p class="team-card__title">Senior Vice President, Global Services</p>
                          <p class="team-card__tenure">12 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Howie Hsueh is responsible for leading global professional services and product support teams to ensure customer success.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Greg-Larson-LI-500x500.jpg" alt="Headshot of Greg Larson" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Greg Larson</h3>
                          <p class="team-card__title">Senior Vice President, Global Commercial Services</p>
                          <p class="team-card__tenure">NEW TO VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Greg Larson is responsible for leading services teams and ensuring customer success for Commercial Cloud across North America and Europe.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Vivian-Welsh-LI-500x500.jpg" alt="Headshot of Vivian Welsh" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Vivian Welsh</h3>
                          <p class="team-card__title">Chief People Officer</p>
                          <p class="team-card__tenure">16 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Vivian Welsh is responsible for people processes, culture, and talent attraction.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Catherine-Allshouse-LI-500x500.jpg" alt="Headshot of Catherine Allshouse" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Catherine Allshouse</h3>
                          <p class="team-card__title">Executive Vice President, Internal Operations</p>
                          <p class="team-card__tenure">6 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Catherine Allshouse is responsible for TechOps, information security, global customer support, IT, and workplace and facilities teams.</p>
              </a>
          </div>
      </div>
    </section>
  `,
};

const PeopleTeamDark = {
  template: /*html*/ `
    <section class="team-cards team-cards--dark">
      <div class="container">
          <div class="copy-container">
              <h2>Management</h2>
          </div>

          <div class="team-cards__grid">
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Peter-Gassner-LI-500x500.jpg" loading="lazy" width="150" height="150" alt="Headshot of Peter Gassner" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Peter Gassner</h3>
                          <p class="team-card__title">Founder and CEO</p>
                          <p class="team-card__tenure">17 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Peter Gassner is responsible for Veeva overall, including strategic direction, product direction, and operations.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Tom-Scwhenge-LI-500x500.jpg" loading="lazy" width="150" height="150" alt="Headshot of Tom Schwenger" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Tom Schwenger</h3>
                          <p class="team-card__title">President and Chief Customer Officer</p>
                          <p class="team-card__tenure">5 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Tom Schwenger is responsible for sales, services, and other customer-facing groups.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Asaf-Evenhaim-LI-500x500.jpg" loading="lazy" width="150" height="150" alt="Headshot of Asaf Evenhaim" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Asaf Evenhaim</h3>
                          <p class="team-card__title">CEO, Veeva Crossix</p>
                          <p class="team-card__tenure">4 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Asaf Evenhaim leads Veeva Crossix, including product, sales, strategy, services, and marketing.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Brian-Van-Wagener-LI-500x500.jpg" alt="Headshot of Brian Van Wagener" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Brian Van Wagener</h3>
                          <p class="team-card__title">Chief Financial Officer</p>
                          <p class="team-card__tenure">6 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Brian Van Wagener is responsible for finance, accounting, legal, investor relations, and treasury.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Nitsa-Zuppas-LI-500x500.jpg" alt="Headshot of Nitsa Zuppas" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Nitsa Zuppas</h3>
                          <p class="team-card__title">President and Chief of Staff</p>
                          <p class="team-card__tenure">11 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Nitsa Zuppas is responsible for helping set, communicate, and execute company direction.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Howie-Hsueh-LI-500x500.jpg" alt="Headshot of Howie Hsueh" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Howie Hsueh</h3>
                          <p class="team-card__title">Senior Vice President, Global Services</p>
                          <p class="team-card__tenure">12 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Howie Hsueh is responsible for leading global professional services and product support teams to ensure customer success.</p>
              </a>
              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Greg-Larson-LI-500x500.jpg" alt="Headshot of Greg Larson" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Greg Larson</h3>
                          <p class="team-card__title">Senior Vice President, Global Commercial Services</p>
                          <p class="team-card__tenure">NEW TO VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Greg Larson is responsible for leading services teams and ensuring customer success for Commercial Cloud across North America and Europe.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Vivian-Welsh-LI-500x500.jpg" alt="Headshot of Vivian Welsh" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Vivian Welsh</h3>
                          <p class="team-card__title">Chief People Officer</p>
                          <p class="team-card__tenure">16 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Vivian Welsh is responsible for people processes, culture, and talent attraction.</p>
              </a>

              <a class="team-card" target="_blank" rel="noopener" aria-label="Profile of [name]">
                  <div class="team-card__header">
                      <div class="team-card__headshot">
                          <img src="/wp-content/themes/veeva2015/assets/headshots/Catherine-Allshouse-LI-500x500.jpg" alt="Headshot of Catherine Allshouse" />
                      </div>
                      <div class="team-card__content">
                          <h3 class="team-card__name">Catherine Allshouse</h3>
                          <p class="team-card__title">Executive Vice President, Internal Operations</p>
                          <p class="team-card__tenure">6 YEARS AT VEEVA</p>
                          <div class="team-card__social">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0A66C2" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <p class="team-card__description">Catherine Allshouse is responsible for TechOps, information security, global customer support, IT, and workplace and facilities teams.</p>
              </a>
          </div>
      </div>
    </section>
  `,
};