import MAbout from "../components/MAbout"

const aboutObj = {
  aboutTitle: 'Educational Qualification',
  aboutText: `• M.Com
• M.Phil
• Fellow from Insurance Institute of India (III) 
• PhD in Micro Insurance & Co-op Bank 
• CA Inter GDCA
• Certification in Public Policy Economics from Oxford University
• M.S. in Insurance Management from Boston University 
• PhD in Finance Administration from The American University (USA)
• PhD in Service Industry & GST 
• D.Litt. in Insurance & Co-op Bank from The Thomas International University Paris`.split('\n'),
  aboutImage: require('../assets/EQImage/EQImage.png'),
}
  

const EducationQualification = ({navigation}) => (<MAbout navigation={navigation} aboutObj={aboutObj} />)

export default EducationQualification;