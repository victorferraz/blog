import fs from 'fs'
import { join } from 'path';
import fm from 'front-matter';


const postsDirectory = join(process.cwd(), '_content/posts')

const getPostBySlug = async (slug) => {
  const files = await getFiles();
  const file = files.find((item) => item.indexOf(`${slug}.md`) > -1);
  const fileContents = await readFile(`${postsDirectory}/${file}`);
  const result = fm(fileContents);
  return result;
}

const getFiles = async () => {
  const files = await readDir(postsDirectory);
  return files;
}

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data)=> {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  });
}

const readDir = (folder) => {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, data)=> {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  })
}

const getAllPosts = async () => {
  const urlList = await getListUrl();
  const result =  Promise.all(urlList.map(async (item) => {
    const post = await getPostBySlug(item);
    return  {
      attr: post.attributes
    };
  }));
  result.then((res) => {
    return res.sort((a, b) => {
      const dateA = new Date(a.attr.date);
      const dateB = new Date(b.attr.date);
      return dateB - dateA;
    })
  });
  return result;

}

const getListUrl = async () => {
  const files = await getFiles();
  const result = files.map((item) => {
    item = item.replace('.md', '');
    return item;
  });
  return result;
}

export {
  getPostBySlug,
  getAllPosts,
  getListUrl
}
