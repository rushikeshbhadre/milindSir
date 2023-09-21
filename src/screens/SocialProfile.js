import MAbout from "../components/MAbout"

const aboutObj = {
  aboutTitle: 'Social Profile',
  aboutText: `Founder Chairman Madhaymvargiya Vikas Munch
Founder Chairman of 'Kai. Sau, Bharati Bharat Sampgaonkar Cancer Charitable Trust' (BBS Foundation). Founder President of Pune Padvidhar Yuvak Sangha
EX 'Mukhyamantri Mitra-Pune District in accordance with 'Mukhyamantri Mitra Abhiyan'
EX Service Industry Head BJP Maharashtra
Executive Committee Member of BJP Maharashtra Industrial Cell
Vice President of 'Narendra Modi VicharManch' Maharashtra State`.split('\n'),
  aboutImage: require('../assets/SPImage/SPImage.png'),
}
  

const SocialProfile = ({navigation}) => (<MAbout navigation={navigation} aboutObj={aboutObj} />)

export default SocialProfile;