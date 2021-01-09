export default {
  name:'ListView',
  withActions:true,
  selfRenderChildren:true,
  designProps:{
    isDeisgning:true,
    query:null,
  },
  props:{
    variant:'outlined',
    //elevation:6,
    rowsPerPageOptions:'10,25,50',
    defalutRowsPerPage:10,
    filters:[
      {
        slug:'gender',
        label:'性别',
        searchable:true,
        conditions:[
          {
            slug:'male',
            label:'男'
          },
          {
            slug:'female',
            label:'女'
          },
        ]
      },
      {
        slug:'publish',
        label:'已发布',
        conditions:[
          {
            slug:'published',
            label:'已发布男'
          },
          {
            slug:'not-published',
            label:'未发布'
          },
        ]

      }
    ],
    batchCommands:[
      {
        slug:"publish",
        label:"发布",
        icon:"mdi-publish",
      },
      {
        slug:"check",
        label:"审核",
        icon:"mdi-check-bold",
      },
      {
        slug:"delete",
        label:"删除",
        icon:"mdi-delete",
        confirmMessage:"删除后将不可恢复，您确定要删除吗？",
      },
    ],
    rowCommands:[
      {
        slug:"edit",
        label:"编辑",
        icon:"mdi-pencil",
        jumpToPage:{
          //name: JUMP_TO_PAGE_ACidTION,
          pageId:'1012',
          param:'id',
          paramField:'id',
        }
      },
      {
        slug:"publish",
        label:"发布",
        icon:"mdi-publish",
      },
      {
        slug:"check",
        label:"审核",
        icon:"mdi-check-bold",
      },
      {
        slug:"delete",
        label:"删除",
        icon:"mdi-delete",
        confirmMessage:"删除后将不可恢复，您确定要删除吗？",
      },
    ],
    query:'posts',
    mutation: 'updatePosts',
  },
  children:[
    {
      name:'TableColumn',
      props:{
        label:'图片',                  
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'MediaView',
        designProps:{
          isDeisgning:true,
        },
        props:{
          field:'image',
          width:'60px',
        }
      }]
    },
    {
      name:'TableColumn',
      props:{
        label:'标题',
        width:'200px',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'TextView',
        props:{
          field:'name',
          variant:'outlined',
          size:'small',
        }
      }]
    },
    {
      name:'TableColumn',
      props:{
        label:'颜色',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'TextBox',
        props:{
          field:'color',
          variant:'outlined',
          size:'small',
        }
      }]
    },
    {
      name:'TableColumn',
      props:{
        label:'型号',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'SelectBox',
        props:{
          field:'category',
          variant:"outlined",
          size:'small',
          withoutEmpertyItem:false,                        
          items:[
            {
              slug:'100',
              label:'100'
            },
            {
              slug:'200',
              label:'200'
            },
            {
              slug:'300',
              label:'300'
            }
          ]
        }
      }],
    },
    {
      name:'TableColumn',
      props:{
        label:'库存',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'TextBox',
        props:{
          field:'stock',
          variant:'outlined',
          size:'small',
        }
      }]
    },
  ],             

}
