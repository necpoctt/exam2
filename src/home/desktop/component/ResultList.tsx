import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import ResultItem from './ResultItem';

interface IResultList {
  data: IuserData[];
}

interface IitemKey {
  columnIndex: number;
  rowIndex: number;
}

const ResultList = ({ data }: IResultList) => {
  const count = data.length;
  const itemKey = ({ columnIndex, rowIndex }: IitemKey) => {
    const item = data[rowIndex];
    return `${item.id}-${columnIndex}`;
  };
  return (
    <AutoSizer>
      {({ height, width }: IAutoSizer) => (
        <Grid
          className="loader"
          height={height}
          columnCount={count}
          rowHeight={228}
          columnWidth={219}
          width={width}
          rowCount={Math.ceil(count / 3)}
          itemData={data}
          itemKey={itemKey}
        >
          {ResultItem}
        </Grid>
      )}
    </AutoSizer>
  );
};
export default ResultList;
