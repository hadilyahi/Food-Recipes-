import React from 'react';
import CardRev from '../component/CardRev';

function Review() {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen place-items-center p-4">
      <CardRev imageSrc={'main1.svg'} title={'Michael Brown'} text={'Hello, I am one of the users of this site.I have tried many recipes,all of which were successful and delicious, especially healthy food. It is truly amazing'} />
      <CardRev imageSrc={'girl1.svg'} title={'Sarah Davis'} text={'Hey, how are you girls? I know that you are always looking for ready-made recipes with guaranteed results, so this is the solution. It is a really wonderful site. Thank you.'} />
      <CardRev imageSrc={'main2.svg'} title={'John Smith'} text={'Hello, it is very wonderful that there is a site that displays all these distinctive recipes. All the recipes that I tried were successful.I advise you to try that'} />
      <CardRev imageSrc={'girl2.svg'} title={'Mia White'} text={'Hello, I am one of the users of this site. I have tried many recipes,all of which were successful and delicious,especially healthy food. It is truly amazing'} />
    </div>
  );
}

export default Review;
