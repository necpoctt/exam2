import { useState } from 'react';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import memoizeOne from 'memoize-one';
import ProfileItem from './ProfileItem';

const getItemData = memoizeOne((data, isItemLoaded) => ({
  data,
  isItemLoaded,
}));

interface IProfileList {
  hasNextPage: boolean;
  data: IuserData[];
  getMore: Function;
}

const ProfileList = ({ hasNextPage, data, getMore }: IProfileList) => {
  const [isLazyLoad, setIsLazyLoad] = useState(false);

  const isItemLoaded = (index: number) => !hasNextPage || index < data.length;
  const itemCount = hasNextPage ? data.length + 1 : data.length;

  const handleScroll = async () => {
    setIsLazyLoad(true);
    await getMore();
    setIsLazyLoad(false);
  };

  const loadMoreItems = isLazyLoad ? () => {} : handleScroll;

  const itemKey = (index: number) => {
    const item = data[index];

    return item ? item.id : index;
  };

  const itemData = getItemData(data, isItemLoaded);

  return (
    <AutoSizer>
      {({ height, width }: IAutoSizer) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
          threshold={1}
        >
          {({ onItemsRendered, ref }) => (
            <List
              height={height}
              width={width}
              itemData={itemData}
              itemKey={itemKey}
              itemCount={itemCount}
              itemSize={61}
              onItemsRendered={onItemsRendered}
              ref={ref}
              className="loader"
            >
              {ProfileItem}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};
export default ProfileList;
