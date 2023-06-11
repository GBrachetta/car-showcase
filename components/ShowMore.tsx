'use client';

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full gap-5 mt-10 flex-center">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="text-white rounded-full bg-primary-blue"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
export default ShowMore;
