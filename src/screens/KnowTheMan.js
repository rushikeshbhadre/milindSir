import MAbout from '../components/MAbout';

const aboutObj = {
  aboutTitle: 'KNOW THE MAN',
  aboutText: [
    `Dr. Milind Sampgaonkar, the world record holder and highly qualified Insurance consultant with 3 Ph.D. in Economics and is the Chairman of Millind Sampgaonkar Enterprises (MSE) & Managing Director of Siddhi Associates & Director of Riddhi's Group, defines himself as a visionary planner. With more than two decades of experience in multiple sectors, he is a pro in areas especially insurance, Sales, Training Analysis, etc. He is also the Founder and President of BIMAKRANTI &`,
    ` Madhyamvargiya`,
    ` Vikas Manch. The professional icon act as a consultant of 38 Co-operative Banks and 400 Credit Societies & 2 Pvt. Banks. The humanitarian entrepreneur has been honored with the titles of World record holder, Man of Asia, Bharat Bhushan, Seva Ratna, Dhruv Ratna, Madhyamvargiyancha Aatmsanman, Covid udyojak, Mahabrands, Jewel Of India, Achiever Of Pune with 475+ awards.`,
  ],
  highlightIndex: [1],
  isHeaderCenter: true,
  //   aboutImage: require('../assets/EQImage.png'),
};

const KnowTheMan = ({navigation}) => (
  <MAbout navigation={navigation} aboutObj={aboutObj} />
);

export default KnowTheMan;
