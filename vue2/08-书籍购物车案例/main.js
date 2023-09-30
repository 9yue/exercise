const app = new Vue({
  el:'#app',
  data:{
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  computed:{
    totalPrice()
    {

      //第一种循环
      // let price=0;
      // for (let i=0;i<this.books.length;i++)
      // {
      //   price+=this.books[i].price*this.books[i].count;
      // }

      //第二种循环
      // let price=0;
      // for (let i in this.books)
      // {
      //   price+=this.books[i].price*this.books[i].count;
      // }

      //第三种循环
      // let price=0;
      // for (let book of this.books)
      // {
      //   price+=book.price * book.count;
      // }
      // return price;


      //高阶函数 reduce
      return this.books.reduce(function (preValue,book){
        return preValue + book.count*book.price;
      },0)

    }
  },
  //过滤器
  filters:{
    finalPrice(price)
    {
      return '￥'+price.toFixed(2)
    }
  },
  methods: {
    //购买数量增加
    increment(index) {
      console.log('增加');
      this.books[index].count++
    },
    //减少数量增加
    decrement(index) {
      console.log('减少');
      this.books[index].count--
    },
  // 移除操作
    delbooks(index)
    {
      this.books.splice(index,1,)
    }
  }
})
