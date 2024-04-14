import React from 'react';

function FirstPage() {
  const profilePhoto = '/images/profile.jpg'; 
  const otherPhotos = [
    { src: '/images/photo1.jpg', description: 'Childhood is often cute.' },
    { src: '/images/photo2.jpg', description: 'High school life is tiring.' },
    { src: '/images/photo3.jpg', description: 'My hometown is a village, and my grandmother cooks a lot every time I go home.' },
    { src: '/images/photo4.jpg', description: 'Eat with grandma and little brother..' },
    { src: '/images/photo5.jpg', description: 'My hobby is playing role-playing games with my friends, and I have many Chinese friends in Korea.' },
    { src: '/images/photo6.jpg', description: 'Now majoring in Information Systems at Hanyang University!I had a hard time just entering the school, but I worked hard every day.' },
    { src: '/images/photo7.jpg', description: 'I believe that reason and logic are the most beautiful languages in the world and the only way for mankind to approach the truth.' },



  ];

  return (
    <div style={{ display: 'flex', maxWidth: '1200px', margin: 'auto', backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '8px' }}>
      {/* 左侧区域: 个人照片和介绍 */}
      <div style={{ marginRight: '20px', width: '30%' }}>
        <img src={profilePhoto} alt="Profile" style={{ width: '100%', borderRadius: '8px' }} />
        <h2>LI HAOYE/이호엽</h2>
        <p>Born in 1999, Chinese have studied computer application technology in China for three years.</p>
      </div>

      {/* 右侧区域: 图片和介绍 */}
      <div style={{ width: '70%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
        {otherPhotos.map((photo, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img src={photo.src} alt={`Scene ${index + 1}`} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstPage;

