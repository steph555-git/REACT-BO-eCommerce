export const buildTree = (rows) => {
    const nodeMap = {};
    const treeData = [];

    rows.forEach((row) => {
        const { id, title, key, parent_id } = row;

        const node = {
            title,
            key,
            children: [],
        };

        nodeMap[id] = node;

        if (parent_id === null) {
            treeData.push(node);
        } else {
            const parentNode = nodeMap[parent_id];
            parentNode.children.push(node);
        }
    });
    return treeData;
}