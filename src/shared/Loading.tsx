import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
    }}
  >
    <CircularProgress
      sx={{
        color: theme =>
          theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      }}
    />
  </div>
);

export default Loading;
