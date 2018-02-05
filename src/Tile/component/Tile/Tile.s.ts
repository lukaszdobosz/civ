import glamorous from 'glamorous';

export const TileWrapper = glamorous.g({
  '& rect': {
    fillOpacity: 1,
    transition: 'all .2s '
  },
  ':hover': {
    '& rect': { fillOpacity: .8 }
  }
});
