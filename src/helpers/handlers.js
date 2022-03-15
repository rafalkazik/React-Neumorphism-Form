export const goNextPage = (setPage) => {
  setPage((page) => page + 1);
};

export const goFirstPage = () => {
  window.location.reload();
};
