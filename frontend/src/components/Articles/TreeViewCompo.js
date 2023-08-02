import React, { useState, useEffect } from 'react'
import { Tree } from 'antd'

import { getFetchBackendDataBase } from '../../utils/fetchBackendDataBase'
import { buildTree } from '../../utils/buildTree'


const TreeViewCompo = ({ onCheck, checkedKeys }) => {

  const [expandedKeys, setExpandedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [defaultExpandAll, setDefaultExpandAll] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [dataFetched, setDataFetched] = useState([])

  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true)
        const jsonData = await getFetchBackendDataBase('cat')
        const treeData = buildTree(jsonData)
        setDataFetched(treeData)

        const allKeys = [];
        const traverseTree = (data) => {
          data.forEach((item) => {
            allKeys.push(item.key);
            if (item.children) {
              traverseTree(item.children);
            }
          });
        };
        traverseTree(treeData);
        setExpandedKeys(allKeys);





        setIsLoading(false)
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        setIsLoading(false)
      }
    };
    fetchCategories();
  }, [])

  return (
    <>
      <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        defaultExpandAll={defaultExpandAll}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={dataFetched}
      />
    </>
  )
}

export default TreeViewCompo