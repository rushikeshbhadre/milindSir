import MAbout from "../components/MAbout"

const aboutObj = {
  aboutTitle: 'Professional  Profile',
  aboutText: `Chairman of Milind Sampgaonkar Enterprises (MSE)

Managing Director of Siddhi Associates
• Siddhi Associates Financial Solutions
• Siddhi Associates(Consultant of Financial Institutions)
• Siddhi Associates Buildcon
  
Director of Riddhi's Group
• Riddhi's Research & Sentimental Training • Riddhi's Social Media & Event Management
• Riddhi's Resort & Restaurant
• Riddhi's Lady Wing
  
Founder Chairman - Bimakranti
  
Consultant of - 38 Co-operative Banks and 400 Credit Societies & 2 Pvt. Banks`.split('\n'),
  aboutImage: require('../assets/PPImage/PPImage.png'),
}
  

const ProfessionalProfile = ({navigation}) => (<MAbout navigation={navigation} aboutObj={aboutObj} />)

export default ProfessionalProfile;