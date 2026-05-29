Add-Type -AssemblyName System.Drawing

$inputPath  = "c:\Users\Kim Ruds Guston\Downloads\portfolioWebsite-1\public\Assets\personalLogo.png"
$outputPath = "c:\Users\Kim Ruds Guston\Downloads\portfolioWebsite-1\public\Assets\personalLogo_transparent.png"

# Load image
$src = New-Object System.Drawing.Bitmap($inputPath)
$w = $src.Width
$h = $src.Height

# Create output bitmap with alpha channel
$dst = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Lock bits for fast pixel access
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$srcData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly,  [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$dstData = $dst.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$stride = $srcData.Stride
$totalBytes = $stride * $h
$srcPixels = New-Object byte[] $totalBytes
$dstPixels = New-Object byte[] $totalBytes

# Copy source pixels into array
[System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $srcPixels, 0, $totalBytes)

# Process each pixel (BGRA format)
for ($i = 0; $i -lt $totalBytes; $i += 4) {
    $b = $srcPixels[$i]
    $g = $srcPixels[$i + 1]
    $r = $srcPixels[$i + 2]
    $a = $srcPixels[$i + 3]

    # Calculate perceived brightness
    $brightness = ($r * 0.299 + $g * 0.587 + $b * 0.114)

    if ($brightness -lt 30) {
        # Very dark pixel -> fully transparent
        $dstPixels[$i]     = 0
        $dstPixels[$i + 1] = 0
        $dstPixels[$i + 2] = 0
        $dstPixels[$i + 3] = 0
    } elseif ($brightness -lt 65) {
        # Transition zone -> gradually increase opacity for smooth edges
        $alpha = [Math]::Round((($brightness - 30) / 35.0) * $a)
        $dstPixels[$i]     = $b
        $dstPixels[$i + 1] = $g
        $dstPixels[$i + 2] = $r
        $dstPixels[$i + 3] = [byte][Math]::Min(255, $alpha)
    } else {
        # Bright pixel -> keep as-is
        $dstPixels[$i]     = $b
        $dstPixels[$i + 1] = $g
        $dstPixels[$i + 2] = $r
        $dstPixels[$i + 3] = $a
    }
}

# Copy processed pixels to output bitmap
[System.Runtime.InteropServices.Marshal]::Copy($dstPixels, 0, $dstData.Scan0, $totalBytes)

$src.UnlockBits($srcData)
$dst.UnlockBits($dstData)

# Save with PNG format (supports transparency)
$dst.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$src.Dispose()
$dst.Dispose()

Write-Host "Done! Transparent logo saved to: $outputPath"
