import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
	<Layout heroTitle="About" heroSubTitle="Flat design, clean code, & all things orange">
		<SEO title="About" />
		<section className="about-page container">
		<div className="row">
			<div className="education grid-half">
				<div className="icon-wrap theme-primary-border-secondary">
					{/* <svg width="104px" height="104px" viewBox="0 0 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
			<desc>Created with Sketch.</desc>
			<defs>
					<polyline id="path-1" points="0 0.611883495 103.388117 0.611883495 103.388117 104 0 104"></polyline>
			</defs>
			<g id="Education-Graphic" stroke="none" fill="none" stroke-width="1" fill-rule="evenodd">
					<g>
							<path d="M32.0173592,87.1362485 C37.908,90.6005592 44.7608932,92.5977631 52.0752233,92.5977631 C59.075534,92.5977631 65.6547961,90.7691806 71.3707573,87.5744621 L71.3707573,68.8322485 C71.3707573,64.4248699 69.402835,60.4627728 66.3141359,57.7527146 C70.2368544,53.9390447 72.6833786,48.6138408 72.6833786,42.7100738 C72.6833786,33.6449087 66.9371262,25.9226563 58.8887379,22.9864233 C58.5201942,22.852132 52.0721942,25.4915107 51.6945631,25.3774136 C49.771068,24.7968311 46.8489709,22.148365 44.6457864,22.9339184 C36.5206602,25.8297631 30.7057476,33.5913942 30.7057476,42.7100738 C30.7057476,48.6138408 33.1512621,53.9390447 37.0749903,57.7527146 C33.9852816,60.4627728 32.0173592,64.4248699 32.0173592,68.8322485 L32.0173592,87.1362485 Z" id="Fill-1"  className="theme-primary-fill"></path>
							<path d="M45.9348816,39.5811883 C45.9348816,40.5969553 45.1119689,41.419868 44.0962019,41.419868 C43.080435,41.419868 42.2575223,40.5969553 42.2575223,39.5811883 C42.2575223,38.5654214 43.080435,37.7425087 44.0962019,37.7425087 C45.1119689,37.7425087 45.9348816,38.5654214 45.9348816,39.5811883" id="Fill-3" fill="#FEFEFE"></path>
							<path d="M61.5655767,39.5811883 C61.5655767,40.5969553 60.7426641,41.419868 59.7268971,41.419868 C58.7111301,41.419868 57.8882175,40.5969553 57.8882175,39.5811883 C57.8882175,38.5654214 58.7111301,37.7425087 59.7268971,37.7425087 C60.7426641,37.7425087 61.5655767,38.5654214 61.5655767,39.5811883" id="Fill-5" fill="#FEFEFE"></path>
							<path d="M44.096,46.3238214 C44.096,46.3238214 44.3726602,51.5823845 51.7576699,51.5823845 C59.1436893,51.5823845 59.7262913,46.3238214 59.7262913,46.3238214" id="Fill-7" fill="#FEFEFE"></path>
							<path d="M52.2071922,30.7135223 L59.3730951,27.6429981 C59.650765,27.5238524 59.8304932,27.2502214 59.8304932,26.9493282 L59.8304932,22.2269204 L52.0153476,24.4603961 C51.9466874,24.4795806 51.8760078,24.4795806 51.8083573,24.4603961 L43.9932117,22.2269204 L43.9932117,26.9493282 C43.9932117,27.2502214 44.1719301,27.5238524 44.4496,27.6429981 L51.6144932,30.7135223 C51.8033087,30.7953087 52.0183767,30.7953087 52.2071922,30.7135223 M52.0153476,23.6455612 L52.0153476,23.6455612 L66.4814447,19.5118136 C66.6066485,19.4764738 66.7045903,19.378532 66.7399301,19.2523184 C66.7974835,19.0523961 66.681367,18.8433864 66.4814447,18.7868427 L52.0153476,14.6530951 C51.9466874,14.6339107 51.8760078,14.6339107 51.8083573,14.6530951 L37.3412505,18.7868427 C37.2160466,18.8221825 37.1181049,18.9201243 37.082765,19.0453282 C37.0252117,19.2452505 37.1413282,19.4542602 37.3412505,19.5118136 L40.5985709,20.442765 L40.5985709,26.7928233 C40.5420272,26.825134 40.4895223,26.8655223 40.442066,26.9129786 C40.1472311,27.2078136 40.1472311,27.6854058 40.442066,27.9792311 C40.4511534,27.9893282 40.4612505,27.9984155 40.4703379,28.0075029 C40.0523184,28.3275806 39.8433087,28.9546097 39.8433087,28.9546097 L39.4666874,31.217367 C39.4666874,31.217367 40.2209398,31.9716194 40.9751922,31.9716194 C41.7294447,31.9716194 42.4836971,31.217367 42.4836971,31.217367 L42.106066,28.9546097 C42.106066,28.9546097 41.898066,28.3275806 41.4790369,28.0075029 C41.489134,27.9984155 41.4992311,27.9893282 41.5083184,27.9792311 C41.8031534,27.6854058 41.8031534,27.2078136 41.5083184,26.9129786 C41.4608621,26.8655223 41.4083573,26.825134 41.3518136,26.7928233 L41.3518136,20.657833 L51.8083573,23.6455612 C51.8760078,23.6647456 51.9466874,23.6647456 52.0153476,23.6455612" id="Fill-9" fill="#221F20"></path>
							<g id="Group-13">
									<mask id="mask-2" fill="white">
											<use xlink:href="#path-1"></use>
									</mask>
									<g id="Clip-12"></g>
							</g>
							<path d="M44.096,23.3052893 L51.9111456,24.9713087" id="Fill-14"  className="theme-primary-fill"></path>
					</g>
			</g>
						</svg> */}
				</div>
				<h3 className="theme-primary">Education</h3>
				<hr className="theme-primary-fill-secondary" />
				<p>I gradutated from Cal Poly San Luis Obispo in 2014 with a BS in Graphic Communications and a concentration in Web &amp; Digital Media. My curriculum taught me the best design practices for digital and print. During my time at Cal Poly I found my love for making websites. Cal Poly has a hands on learning environment with a motto of learn by doing. After getting a taste for the exciting world of web development in Cal Poly's first hackathon, I decided to create my own club. My senior year I co-founded the Creative Media Development Club (⌘CMD) to help sponsor future hackathons as well as help teach other students web development.</p>
			</div>
			<div className="occupation grid-half">
				<div className="icon-wrap theme-primary-border-secondary">
					{/* <svg width="104px" height="103px" viewBox="0 0 104 103" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

							<desc>Created with Sketch.</desc>
							<defs>
									<polyline id="path-1" points="0 0.606 103.434 0.606 103.434 103 0 103"></polyline>
							</defs>
							<g id="Occupation-Graphic" stroke="none" fill="none" stroke-width="1" fill-rule="evenodd">
									<g>
											<path d="M31.7095,66.1704 L31.7095,85.2984 C37.5435,88.7294 44.3305,90.7074 51.5745,90.7074 C58.5075,90.7074 65.0235,88.8954 70.6855,85.7324 L70.6855,66.1704 C70.6855,61.8054 68.7355,57.8814 65.6765,55.1974 C69.5615,51.4204 71.9845,46.1464 71.9845,40.2994 C71.9845,28.8184 62.6775,19.5124 51.1975,19.5124 C39.7175,19.5124 30.4105,28.8184 30.4105,40.2994 C30.4105,46.1464 32.8325,51.4204 36.7185,55.1974 C33.6585,57.8814 31.7095,61.8054 31.7095,66.1704" id="Fill-1"  className="theme-primary-fill"></path>
											<g id="Group-5">
													<mask id="mask-2" fill="white">
															< xlink:href="#path-1" />
													</mask>
													<g id="Clip-4" />
													<path d="M51.7174,5.6844 C26.0284,5.6844 5.1304,26.3734 5.1304,51.8034 C5.1304,77.2324 26.0284,97.9214 51.7174,97.9214 C77.4044,97.9214 98.3034,77.2324 98.3034,51.8034 C98.3034,26.3734 77.4044,5.6844 51.7174,5.6844 M51.7174,103.0004 C23.2004,103.0004 0.0004,80.0324 0.0004,51.8034 C0.0004,23.5724 23.2004,0.6054 51.7174,0.6054 C80.2334,0.6054 103.4334,23.5724 103.4334,51.8034 C103.4334,80.0324 80.2334,103.0004 51.7174,103.0004" id="Fill-3" mask="url(#mask-2)"></path>
											</g>
											<path d="M59.0417,42.6303 C56.7527,42.6303 54.8907,40.7683 54.8907,38.4803 C54.8907,36.1913 56.7527,34.3293 59.0417,34.3293 C61.3307,34.3293 63.1927,36.1913 63.1927,38.4803 C63.1927,40.7683 61.3307,42.6303 59.0417,42.6303" id="Fill-6" fill="#FEFEFE"></path>
											<path d="M43.348,42.6303 C41.059,42.6303 39.197,40.7683 39.197,38.4803 C39.197,36.1913 41.059,34.3293 43.348,34.3293 C45.637,34.3293 47.499,36.1913 47.499,38.4803 C47.499,40.7683 45.637,42.6303 43.348,42.6303" id="Fill-8" fill="#FEFEFE"></path>
											<path d="M59.0544,42.6733 C56.7654,42.6733 54.9034,40.8113 54.9034,38.5233 C54.9034,36.2343 56.7654,34.3723 59.0544,34.3723 C61.3424,34.3723 63.2054,36.2343 63.2054,38.5233 C63.2054,40.8113 61.3424,42.6733 59.0544,42.6733 M43.3394,42.6733 C41.0504,42.6733 39.1894,40.8113 39.1894,38.5233 C39.1894,36.2343 41.0504,34.3723 43.3394,34.3723 C45.6284,34.3723 47.4904,36.2343 47.4904,38.5233 C47.4904,40.8113 45.6284,42.6733 43.3394,42.6733 M59.0544,33.1083 C56.5774,33.1083 54.4894,34.7813 53.8474,37.0553 C53.0704,36.7083 52.2254,36.5243 51.3674,36.5243 C50.3894,36.5243 49.4414,36.7583 48.5844,37.1993 C47.9914,34.8533 45.8684,33.1083 43.3394,33.1083 C40.3534,33.1083 37.9254,35.5373 37.9254,38.5233 C37.9254,41.5083 40.3534,43.9373 43.3394,43.9373 C46.3124,43.9373 48.7324,41.5293 48.7524,38.5613 C49.5334,38.0573 50.4324,37.7883 51.3674,37.7883 C52.1654,37.7883 52.9494,37.9883 53.6474,38.3643 C53.6464,38.4173 53.6404,38.4693 53.6404,38.5233 C53.6404,41.5083 56.0684,43.9373 59.0544,43.9373 C62.0404,43.9373 64.4694,41.5083 64.4694,38.5233 C64.4694,35.5373 62.0394,33.1083 59.0544,33.1083" id="Fill-10" fill="#030404"></path>
											<path d="M57.9128,44.8809 C57.6968,44.8789 57.5148,45.0499 57.5088,45.2679 L57.5068,45.2989 C57.4858,45.6019 57.3498,45.9609 56.8268,45.9609 C56.6138,45.9609 56.2068,45.4559 55.9098,45.0869 C55.3418,44.3799 54.6978,43.5799 53.7958,43.5799 C52.6918,43.5799 51.6118,44.0059 51.1978,44.1889 C50.7828,44.0059 49.7028,43.5799 48.5988,43.5799 C47.6968,43.5799 47.0528,44.3799 46.4848,45.0869 C46.1878,45.4559 45.7808,45.9609 45.5678,45.9609 C45.0448,45.9609 44.9088,45.6019 44.8878,45.2979 L44.8858,45.2679 C44.8798,45.0509 44.7028,44.8809 44.4858,44.8809 L44.4818,44.8809 C44.2638,44.8829 44.0878,45.0609 44.0848,45.2789 C44.0848,45.2789 44.0848,45.3029 44.0878,45.3459 C44.1118,45.7959 44.3068,48.0199 45.8428,48.4799 C46.3768,48.6389 46.9128,48.7199 47.4368,48.7199 C48.7648,48.7199 49.9578,48.2019 50.7098,47.2979 C50.9158,47.0499 51.0748,46.8289 51.1978,46.6319 C51.3198,46.8289 51.4788,47.0499 51.6838,47.2979 C52.4368,48.2019 53.6298,48.7199 54.9578,48.7199 C55.4818,48.7199 56.0178,48.6389 56.5518,48.4799 C58.0878,48.0199 58.2828,45.7959 58.3058,45.3459 C58.3098,45.3029 58.3088,45.2789 58.3088,45.2789 C58.3068,45.0609 58.1308,44.8829 57.9128,44.8809" id="Fill-12" fill="#FEFEFE"></path>
											<polygon id="Fill-14" fill="#FEFEFE" points="54.7462 57.7069 47.6482 57.7069 50.8592 59.8539 47.6752 74.2629 51.1702 82.7319 54.7192 74.2629 51.5352 59.8539"></polygon>
									</g>
							</g>
					</svg> */}
				</div>
				<h3 className="theme-primary">Occupation</h3>
				<hr className="theme-primary-fill-secondary" />
				<p>My carreer journey began when I applied for the IT department at Cal Poly. I went in with only a design background and an eagerness to learn. I was taught best web development practices from the ground up, and watched Lynda tuturials for days on end. Soon I was fixing bugs on Cal Poly's own website. By my Senior year I was working as the Web Development Manager at Univeristy Graphic Systems, a student-run print shop on campus. I was also leading development for the Mustang News website, our campus paper. I received hands-on, industy experience and got my first job at Rosetta right out of school. Since then I've continued to refine my skills.</p>
			</div>
		</div>
		<div className="row">
		<div className="grid-full about-site">
			<h3 className="theme-primary">About this site</h3>
			<hr className="theme-primary-fill-secondary" />
		</div>
		<div className="row">
			<div className="grid-half">
            <p>This site was designed and developed from the ground up with <a href="https://getgrav.org" target='_blank'>Grav</a> <i className="fa fa-grav"></i>, a super fast flat-file cms. I also utilized Chris Ferdinandi's awesome <a href='https://cferdinandi.github.io/kraken/' target='_blank'>Kraken</a> framework to kickstart my project. I'm using League Spartan and Montserrat for my typography, and designed everything in Sketch.</p>
			</div>
			<div className="grid-half">
				<p>I built this site in order to share some of my work, experiences, and thoughts with you all. Check out my <a href='/blog'>blog</a> for some cool front-end tips, tricks, and tuturials! I'm a pretty laid back guy and am easy to work with, so if you have any questions or wanna work together, shoot me a <a href='mailto:kknopper@gmail.com' target='_blank'>line</a>! Catch you on the flip side.</p>
			</div>
		</div>


	</div>
</section>

	</Layout>
)

export default About
