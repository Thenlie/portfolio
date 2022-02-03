import Avatar from 'avataaars';

function MyAvatar() {
    return (
      <div className='mx-auto avatar'>
        <Avatar
            avatarStyle='Circle'
            topType='ShortHairShortWaved'
            accessoriesType='Blank'
            hairColor='BrownDark'
            facialHairType='BeardLight'
            facialHairColor='BrownDark'
            clotheType='BlazerSweater'
            eyeType='Happy'
            eyebrowType='RaisedExcited'
            mouthType='Smile'
            skinColor='Light'
        />
      </div>
    )
  }

export default MyAvatar