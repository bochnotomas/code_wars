// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  const pages = this.collection.length / this.itemsPerPage;

  return Math.ceil(pages);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  //if pageIndex is out of range to negative ==> return -1
  if (pageIndex < 0) {
    console.log('out of range negative', -1);
    return -1;
  } else {
    //get page count
    const pages = this.pageCount();
    console.log('amount of pages', pages);
    // if pageIndex is out of range in case we access the number of the page that doesnt exists => return -1
    if (pages <= pageIndex) {
      console.log('out of range positive', -1);
      return -1;
    } else if (pageIndex == 0) {
      // if its first page return items per page ,as the page is fully filled up
      console.log('first page', this.itemsPerPage);
      return this.itemsPerPage;
    } else {
      // if its not the first page, either return the pages count or if its last page return the remainder
      if (pageIndex === pages - 1) {
        //last page, get the remainder, slice the array from the end and return he length of itt
        console.log('last page');
        const remainder = this.collection.length % this.itemsPerPage;

        if (remainder == 0) {
          //if there is no remainder, meaning its a last page, but fully filled up => return the items per page

          console.log(this.itemsPerPage);
          return this.itemsPerPage;
        } else {
          // if there is remainder, slice the array from the end, return the lenght of it
          console.log(this.collection.slice(-remainder).length);
          return this.collection.slice(-remainder);
        }
      } else {
        //default case scenario, any page between first or last, return items per page
        console.log(this.itemsPerPage);
        return this.itemsPerPage;
      }
    }
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0) {
    console.log(-1);
    return -1;
  } else if (itemIndex >= this.collection.length) {
    console.log(-1);
    return -1;
  }
  let pageCounter = 0;
  let page = 0;

  for (let i = 0; i < itemIndex; i++) {
    if (pageCounter === this.itemsPerPage) {
      pageCounter = 0;
      page++;
    }
    pageCounter++;
    console.log(i);
  }

  return page;
};

//testing
let helper = new PaginationHelper(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ],
  10
);

helper.pageItemCount(3);
