import React from 'react'
import companyAge from '../../../assets/images/about/company-age-bg.jpg';
import bnar from '../../../assets/images/about/company-banner.png';



const AwardSection = () => {
  return (
      <>
        {/* <!-- award-section - start */}
		{/* ================================================== --> */}
		<section id="award-section" class="award-section sec-ptb-100 clearfix">
			<div class="container">
				<div class="row">

					{/* <!-- company-age - start --> */}
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="company-age sr-fade1" style={{backgroundImage: 'url('+ companyAge +')'}}>
							<div class="banner-img">
								<img src={bnar} alt="Image_not_found"/>
							</div>
						</div>
					</div>
					{/* <!-- company-age - end --> */}

					<div class="col-lg-6 col-md-12 col-sm-12">
						{/* <!-- section-title - start --> */}
						<div class="section-title text-left mb-80 sr-fade1">
							{/*<small class="sub-title">harmoni awaed</small>*/}
							<h2 class="big-title">Our Winning <strong>Awards</strong></h2>
						</div>
						{/* <!-- section-title - end --> */}

						{/* <!-- awaed-item-area - start --> */}
						<div class="awaed-item-area sr-fade2">
							<span class="arrow-up">
								<i class="fas fa-chevron-circle-up"></i>
							</span>

							

							<span class="arrow-down">
								<i class="fas fa-chevron-circle-down"></i>
							</span>
							<div class="awaed-wrapper">

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">aug 2018</span>
											1st Place for Unique Events 2018
										</h3>
										<p class="m-0">
										In 2018, we secured 1st Place for Unique Events, a testament to our commitment to pushing creative boundaries and redefining the event landscape. This prestigious recognition celebrates our dedication to curating experiences that are not just memorable but set a new standard for innovation and uniqueness in the industry.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">may 2017</span>
											1st Winner Best New Years Events
										</h3>
										<p class="m-0">
										In 2017, we proudly emerged as the 1st Winner of the Best New Year's Events, a testament to our commitment to ringing in the new year with unparalleled excitement and innovation. This accolade recognizes our dedication to crafting celebrations that set the standard for joy, elegance, and unforgettable moments.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">dec 2016</span>
											1st Place International Events Awards 
										</h3>
										<p class="m-0">
										In 2016, we clinched the 1st Place International Events Award, marking a pivotal moment in our journey. This prestigious recognition underscores our dedication to excellence, global impact, and the art of crafting extraordinary experiences that transcend borders and captivate audiences worldwide.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">aug 2015</span>
											1st Place for Unique Events
										</h3>
										<p class="m-0">
										 Claiming 1st Place for Unique Events is a testament to our dedication to pushing boundaries and redefining the event landscape. We take pride in curating experiences that stand out, captivate, and leave a lasting impression, setting a new standard for creativity and innovation in the industry.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">may 2014</span>
											1st Winner Best New Years Events
										</h3>
										<p class="m-0">
										As the 1st Winner of the Best New Year's Events, we proudly stand at the forefront of creating celebrations that usher in the new year with unparalleled excitement, innovation, and an unwavering commitment to making each moment unforgettable.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">dec 2013</span>
											1st Place International Events Awards 
										</h3>
										<p class="m-0">
										Securing the prestigious 1st Place International Events Award is a testament to our unwavering commitment to excellence, innovation, and the seamless orchestration of unforgettable experiences.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

							</div>
						</div>
						{/* <!-- awaed-item-area - end --> */}
					</div>
					
				</div>
			</div>
		</section>
		{/* <!-- award-section - end */}
		{/* ================================================== --> */}
      </>
  )
}

export default AwardSection
