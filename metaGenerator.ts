import {config} from 'dotenv';
import type {DirForm, FileForm} from './type/fileTypes';
import { setFileType } from './util/fileUtils';
import fs from 'fs';

config();

// Generate Dir List JSON file recursive.
function generateDirList(dir: string) : DirForm {
    const result : DirForm = {
        nowDir: dir,
        nowDirs: [],
        files: []
    };
    const dirLists = fs.readdirSync(dir);
    dirLists.forEach((subDir: string) => {
        const fullPath = dir + "\\" + subDir;
        const fileStat = fs.statSync(fullPath);
        if(fileStat.isDirectory()) {
            result.nowDirs.push(generateDirList(fullPath))
        }
        else {
            const fileName = subDir;
            const splitFileNames = fileName.split(".");
            const fileExtension = splitFileNames[splitFileNames.length - 1];
            const {size} = fileStat;
            result.files.push({
                fileName,
                fileSize: size,
                fileType: setFileType(fileExtension),
                fileExtension,
            });
        }
    });
    return result;
}

try {
    if(process.env.BASE_URL) {
        console.log("JSON 객체 생성 시작.");
        const result = generateDirList(process.env.BASE_URL);
        console.log("JSON 객체 생성 완료.");
        fs.writeFileSync("./meta/gen.json", JSON.stringify(result));
        console.log("JSON 객체 저장 완료.");
    }
    else {
        console.log(".env 를 먼저 설정해주세요.")
    }
}
catch {
    console.error(process.env.BASE_URL, "은 올바른 위치가 아닙니다.")
}
