package basic

import (
	"fmt"
	"strconv"
)

func ByteType() {
	var b byte = '1'

	fmt.Printf("%c\n", b)

	// strconv：string conversion（字符串转换）
	var str = "123"

	/**
	字符串转换为 int 数字
		a => string
		to => 转换
		i => int
	*/
	// 因为字符串转换成其他类型有可能是非法字符，无法转换，所以会需要处理异常的情况
	// 在出现错误的时候，si 变量会是一个 0，因为 0 是默认值
	si, _ := strconv.Atoi(str)
	fmt.Println(si)

	var int1 = 321
	// 数字肯定是可以转换成字符串的，所以这个函数不会返回异常
	is := strconv.Itoa(int1)
	fmt.Println(is)

	// 	字符串转换 float 类型
	var str1 = "123.123"
	// 返回值的类型始终为 float64
	sf, _ := strconv.ParseFloat(str1, 64)

	fmt.Println(sf)

	// 将 100 转换位 2 进制的数字
	fmt.Println(strconv.ParseInt("100", 2, 64))

	// 除了 0/1/"true"/"false" 之外的值都会转换错误，并返回初始值 false
	sb, _ := strconv.ParseBool("true")
	fmt.Println(sb)

	// 	将某个类型的值格式化为字符串
	fmt.Println(strconv.FormatBool(true))   // "true"
	fmt.Println(strconv.FormatInt(123, 64)) // "123"
	fmt.Println(strconv.FormatFloat(3.1415926, 'f', -1, 64))
}
