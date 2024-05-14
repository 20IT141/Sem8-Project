import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Photography',
    text: 'Briefly outline the photography services offered within your event management package, emphasizing their importance in capturing and preserving precious memories.',
  },
  {
    title: 'Cinematography or Videography Service',
    text: 'Step into a world of captivating visuals with our creative, full HD 1080p video services. We offer a unique perspective on your ceremony, capturing every moment in stunning detail and vibrant color.',
  },
  {
    title: 'Full Venue Decoration Service',
    text: 'Transform your event space into a breathtaking masterpiece with our comprehensive Full Venue Decoration Service. From elegant floral arrangements to exquisite table settings, we meticulously curate every aspect of your venue to reflect your unique style and vision.',
  },
  {
    title: 'Home Decoration',
    text: 'Turn your house into a haven with our expert Home Decoration service. Whether you are refreshing a single room or redesigning your entire living space, our team of talented decorators brings creativity and style to every corner.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Harmony Event Management Firm & Wedding Planners is a group of creative minds who would like to make weddings, birthdays & any kind of events courteous & a better place for our clients to celebrate important moments of their lives...</h1>
     {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
