import digests from './markdown/digest';
import translates from './markdown/translate';

export const getPassages = (data) => {
  let lists = [];

  if (data && data.length > 0) {
    const reg = /\[(\S*)\]:<>\((\S*)\)/igm;
    const splitReg = /\[|\]:<>\(|\)/;
    data.forEach(p => {
      let temp = p.source.match(reg);
      if (temp && temp.length > 0) {
        temp.forEach(e => {
          let keys = e.split(splitReg);
          p[keys[1]] = keys[2].replace(/\s/, '');
        });
      }
      lists.push(p);
    });
  }
  return lists;
};

export const datas = {
  digests,
  translates,
};
