(function() {var type_impls = {
"atmega_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Usart%3CH,+USART,+Pin%3CInput,+RXPIN%3E,+Pin%3COutput,+TXPIN%3E,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#238-249\">source</a><a href=\"#impl-Usart%3CH,+USART,+Pin%3CInput,+RXPIN%3E,+Pin%3COutput,+TXPIN%3E,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, USART, RXPIN, TXPIN, CLOCK&gt; <a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, RXPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Output.html\" title=\"struct atmega_hal::port::mode::Output\">Output</a>, TXPIN&gt;, CLOCK&gt;<div class=\"where\">where\n    USART: <a class=\"trait\" href=\"atmega_hal/usart/trait.UsartOps.html\" title=\"trait atmega_hal::usart::UsartOps\">UsartOps</a>&lt;H, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, RXPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Output.html\" title=\"struct atmega_hal::port::mode::Output\">Output</a>, TXPIN&gt;&gt;,\n    RXPIN: <a class=\"trait\" href=\"atmega_hal/port/trait.PinOps.html\" title=\"trait atmega_hal::port::PinOps\">PinOps</a>,\n    TXPIN: <a class=\"trait\" href=\"atmega_hal/port/trait.PinOps.html\" title=\"trait atmega_hal::port::PinOps\">PinOps</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#255-260\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.new\" class=\"fn\">new</a>&lt;IMODE&gt;(\n    p: USART,\n    rx: <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>&lt;IMODE&gt;, RXPIN&gt;,\n    tx: <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Output.html\" title=\"struct atmega_hal::port::mode::Output\">Output</a>, TXPIN&gt;,\n    baudrate: <a class=\"struct\" href=\"atmega_hal/usart/struct.Baudrate.html\" title=\"struct atmega_hal::usart::Baudrate\">Baudrate</a>&lt;CLOCK&gt;\n) -&gt; <a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Input.html\" title=\"struct atmega_hal::port::mode::Input\">Input</a>, RXPIN&gt;, <a class=\"struct\" href=\"avr_hal_generic/port/struct.Pin.html\" title=\"struct avr_hal_generic::port::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"atmega_hal/port/mode/struct.Output.html\" title=\"struct atmega_hal::port::mode::Output\">Output</a>, TXPIN&gt;, CLOCK&gt;<div class=\"where\">where\n    IMODE: <a class=\"trait\" href=\"atmega_hal/port/mode/trait.InputMode.html\" title=\"trait atmega_hal::port::mode::InputMode\">InputMode</a>,</div></h4></section></summary><div class=\"docblock\"><p>Initialize a USART peripheral on the given pins.</p>\n<p>Note that the RX and TX pins are hardwired for each USART peripheral and you <em>must</em> pass\nthe correct ones.  This is enforced at compile time.</p>\n</div></details></div></details>",0,"atmega_hal::usart::Usart"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#273\">source</a><a href=\"#impl-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, USART, RX, TX, CLOCK&gt; <a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt;<div class=\"where\">where\n    USART: <a class=\"trait\" href=\"atmega_hal/usart/trait.UsartOps.html\" title=\"trait atmega_hal::usart::UsartOps\">UsartOps</a>&lt;H, RX, TX&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.release\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#275\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.release\" class=\"fn\">release</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(USART, RX, TX)</a></h4></section></summary><div class=\"docblock\"><p>Deinitialize/disable this peripheral and release the pins.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#281\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.flush\" class=\"fn\">flush</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Block until all remaining data has been transmitted.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_byte\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#289\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.write_byte\" class=\"fn\">write_byte</a>(&amp;mut self, byte: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>)</h4></section></summary><div class=\"docblock\"><p>Transmit a byte.</p>\n<p>This method will block until the byte has been enqueued for transmission but <strong>not</strong> until\nit was entirely sent.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_byte\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#296\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.read_byte\" class=\"fn\">read_byte</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a></h4></section></summary><div class=\"docblock\"><p>Receive a byte.</p>\n<p>This method will block until a byte could be received.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.listen\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#301\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.listen\" class=\"fn\">listen</a>(&amp;mut self, event: <a class=\"enum\" href=\"atmega_hal/usart/enum.Event.html\" title=\"enum atmega_hal::usart::Event\">Event</a>)</h4></section></summary><div class=\"docblock\"><p>Enable the interrupt for <a href=\"atmega_hal/usart/enum.Event.html\" title=\"enum atmega_hal::usart::Event\"><code>Event</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlisten\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#306\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.unlisten\" class=\"fn\">unlisten</a>(&amp;mut self, event: <a class=\"enum\" href=\"atmega_hal/usart/enum.Event.html\" title=\"enum atmega_hal::usart::Event\">Event</a>)</h4></section></summary><div class=\"docblock\"><p>Disable the interrupt for <a href=\"atmega_hal/usart/enum.Event.html\" title=\"enum atmega_hal::usart::Event\"><code>Event</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.split\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#313-318\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/usart/struct.Usart.html#tymethod.split\" class=\"fn\">split</a>(\n    self\n) -&gt; (<a class=\"struct\" href=\"avr_hal_generic/usart/struct.UsartReader.html\" title=\"struct avr_hal_generic::usart::UsartReader\">UsartReader</a>&lt;H, USART, RX, TX, CLOCK&gt;, <a class=\"struct\" href=\"avr_hal_generic/usart/struct.UsartWriter.html\" title=\"struct avr_hal_generic::usart::UsartWriter\">UsartWriter</a>&lt;H, USART, RX, TX, CLOCK&gt;)</h4></section></summary><div class=\"docblock\"><p>Split this USART into a <a href=\"avr_hal_generic/usart/struct.UsartReader.html\" title=\"struct avr_hal_generic::usart::UsartReader\"><code>UsartReader</code></a> and a <a href=\"avr_hal_generic/usart/struct.UsartWriter.html\" title=\"struct avr_hal_generic::usart::UsartWriter\"><code>UsartWriter</code></a>.</p>\n<p>This allows concurrently receiving and transmitting data from different contexts.</p>\n</div></details></div></details>",0,"atmega_hal::usart::Usart"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_serial_Read%3Cu8%3E-for-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#363-364\">source</a><a href=\"#impl-_embedded_hal_serial_Read%3Cu8%3E-for-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, USART, RX, TX, CLOCK&gt; <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Read.html\" title=\"trait atmega_hal::prelude::_embedded_hal_serial_Read\">Read</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt;<div class=\"where\">where\n    USART: <a class=\"trait\" href=\"atmega_hal/usart/trait.UsartOps.html\" title=\"trait atmega_hal::usart::UsartOps\">UsartOps</a>&lt;H, RX, TX&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"atmega_hal/prelude/trait._embedded_hal_serial_Read.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a></h4></section></summary><div class='docblock'>Read error</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#368\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._embedded_hal_serial_Read.html#tymethod.read\" class=\"fn\">read</a>(\n    &amp;mut self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>, <a class=\"enum\" href=\"nb/enum.Error.html\" title=\"enum nb::Error\">Error</a>&lt;&lt;<a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Read.html\" title=\"trait atmega_hal::prelude::_embedded_hal_serial_Read\">Read</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt;&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Read.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_embedded_hal_serial_Read::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Reads a single word from the serial interface</div></details></div></details>","Read<u8>","atmega_hal::usart::Usart"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_embedded_hal_serial_Write%3Cu8%3E-for-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#349-350\">source</a><a href=\"#impl-_embedded_hal_serial_Write%3Cu8%3E-for-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, USART, RX, TX, CLOCK&gt; <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html\" title=\"trait atmega_hal::prelude::_embedded_hal_serial_Write\">Write</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt;<div class=\"where\">where\n    USART: <a class=\"trait\" href=\"atmega_hal/usart/trait.UsartOps.html\" title=\"trait atmega_hal::usart::UsartOps\">UsartOps</a>&lt;H, RX, TX&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a></h4></section></summary><div class='docblock'>Write error</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#354\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html#tymethod.write\" class=\"fn\">write</a>(\n    &amp;mut self,\n    byte: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"nb/enum.Error.html\" title=\"enum nb::Error\">Error</a>&lt;&lt;<a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html\" title=\"trait atmega_hal::prelude::_embedded_hal_serial_Write\">Write</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt;&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_embedded_hal_serial_Write::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Writes a single word to the serial interface</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#358\">source</a><a href=\"#method.flush\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html#tymethod.flush\" class=\"fn\">flush</a>(\n    &amp;mut self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"nb/enum.Error.html\" title=\"enum nb::Error\">Error</a>&lt;&lt;<a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html\" title=\"trait atmega_hal::prelude::_embedded_hal_serial_Write\">Write</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt;&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._embedded_hal_serial_Write.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_embedded_hal_serial_Write::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Ensures that none of the previously written words are still buffered</div></details></div></details>","Write<u8>","atmega_hal::usart::Usart"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-_ufmt_uWrite-for-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#338\">source</a><a href=\"#impl-_ufmt_uWrite-for-Usart%3CH,+USART,+RX,+TX,+CLOCK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, USART, RX, TX, CLOCK&gt; <a class=\"trait\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html\" title=\"trait atmega_hal::prelude::_ufmt_uWrite\">uWrite</a> for <a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt;<div class=\"where\">where\n    USART: <a class=\"trait\" href=\"atmega_hal/usart/trait.UsartOps.html\" title=\"trait atmega_hal::usart::UsartOps\">UsartOps</a>&lt;H, RX, TX&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a></h4></section></summary><div class='docblock'>The error associated to this writer</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_str\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/usart.rs.html#341\">source</a><a href=\"#method.write_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#tymethod.write_str\" class=\"fn\">write_str</a>(\n    &amp;mut self,\n    s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, &lt;<a class=\"struct\" href=\"avr_hal_generic/usart/struct.Usart.html\" title=\"struct avr_hal_generic::usart::Usart\">Usart</a>&lt;H, USART, RX, TX, CLOCK&gt; as <a class=\"trait\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html\" title=\"trait atmega_hal::prelude::_ufmt_uWrite\">uWrite</a>&gt;::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_ufmt_uWrite::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes a string slice into this writer, returning whether the write succeeded. <a href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#tymethod.write_str\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_char\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ufmt_write/lib.rs.html#34\">source</a><a href=\"#method.write_char\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#method.write_char\" class=\"fn\">write_char</a>(&amp;mut self, c: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.char.html\">char</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, Self::<a class=\"associatedtype\" href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#associatedtype.Error\" title=\"type atmega_hal::prelude::_ufmt_uWrite::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes a <a href=\"https://doc.rust-lang.org/nightly/core/primitive.char.html\" title=\"primitive char\"><code>char</code></a> into this writer, returning whether the write succeeded. <a href=\"atmega_hal/prelude/trait._ufmt_uWrite.html#method.write_char\">Read more</a></div></details></div></details>","uWrite","atmega_hal::usart::Usart"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()