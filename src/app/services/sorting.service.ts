import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  sortByDate(entries) {
    var len = entries.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (new Date (entries[j].date) > new Date (entries[j_min].date)) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(entries, i, j_min);
      } else {}
    }
    return entries
  }

  sortByMiles(entries) {
    var len = entries.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (new Date (entries[j].stats.miles) > new Date (entries[j_min].stats.miles)) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(entries, i, j_min);
      } else {}
    }
    return entries
  }

  sortByStrokes(entries) {
    var len = entries.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (new Date (entries[j].stats.strokes) > new Date (entries[j_min].stats.strokes)) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(entries, i, j_min);
      } else {}
    }
    return entries
  }

  sortByStrides(entries) {
    var len = entries.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (new Date (entries[j].stats.strides) > new Date (entries[j_min].stats.strides)) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(entries, i, j_min);
      } else {}
    }
    return entries
  }

  sortByMinutes(entries) {
    var len = entries.length;
    for (var i = 0; i < len - 1; i = i + 1) {
      var j_min = i;
      for (var j = i + 1; j < len; j = j + 1) {
        if (new Date (entries[j].stats.minutes) > new Date (entries[j_min].stats.minutes)) {
            j_min = j;
        } else {}
      }
      if (j_min !== i) {
        this.swap(entries, i, j_min);
      } else {}
    }
    return entries
  }

  swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
  }
}
