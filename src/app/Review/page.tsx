import React from 'react';
import CardRev from '../component/CardRev';

function Review() {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen place-items-center p-4">
      <CardRev imageSrc={'main1.svg'} title={'Michael Brown'} text={'Hey, how are you girls? I know that you are always looking for ready-made recipes with guaranteed results, so this is the solution. It is a really wonderful site. Thank you.'} />
      <CardRev imageSrc={'girl1.svg'} title={'Michael Brown'} text={'Hey, how are you girls? I know that you are always looking for ready-made recipes with guaranteed results, so this is the solution. It is a really wonderful site. Thank you.'} />
      <CardRev imageSrc={'main2.svg'} title={'Michael Brown'} text={'Hey, how are you girls? I know that you are always looking for ready-made recipes with guaranteed results, so this is the solution. It is a really wonderful site. Thank you.'} />
      <CardRev imageSrc={'girl2.svg'} title={'Michael Brown'} text={'Hey, how are you girls? I know that you are always looking for ready-made recipes with guaranteed results, so this is the solution. It is a really wonderful site. Thank you.'} />
    </div>
  );
}

export default Review;
