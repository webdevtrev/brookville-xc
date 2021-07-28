import {buildFileUrl} from '@sanity/asset-utils';
export function fileUrl(ref){
    const fileArray = ref.split('-');
    const fileObj ={
        assetId: fileArray[1],
        extension:fileArray[2]
    }
    const projectObj={
        dataset:'production',
        projectId:'411iwivp'
    }

    return buildFileUrl(fileObj,projectObj);
}
